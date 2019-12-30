import rest from '@octokit/rest'

export const getRepoToken = () => async (payload: {
  owner: string
  repo: string
  jwt: string
}): Promise<string> => {
  const { jwt, owner, repo } = payload
  const octokitWithJWT = new rest({ auth: jwt })
  try {
    const repoInstallation = await octokitWithJWT.apps.getRepoInstallation({
      owner,
      repo
    })

    const installationId = repoInstallation.data.id

    const token = await octokitWithJWT.apps.createInstallationToken({
      installation_id: installationId
    })
    return token.data.token
  } catch (err) {
    throw new Error(
      `Could not get token for repo ${owner}/${repo}: ${err.message}`
    )
  }
}
