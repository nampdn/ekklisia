/*
*  authentication_screen_widget.dart
*  Ekklisia
*
*  Created by Nam Pham.
*  Copyright © 2018 [Company]. All rights reserved.
    */

import 'package:ekklisia/values/values.dart';
import 'package:flutter/material.dart';


class AuthenticationScreenWidget extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
  
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 255, 255),
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            Positioned(
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    left: 0,
                    right: 0,
                    child: Image.asset(
                      "assets/images/21--image-2-square.png",
                      fit: BoxFit.cover,
                    ),
                  ),
                  Positioned(
                    left: 16,
                    top: 18,
                    right: 16,
                    bottom: 144,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Container(
                          height: 82,
                          margin: EdgeInsets.only(right: 4),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Align(
                                alignment: Alignment.topLeft,
                                child: Container(
                                  width: 85,
                                  height: 82,
                                  child: Image.asset(
                                    "assets/images/logo-tng-01.png",
                                    fit: BoxFit.none,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Align(
                                alignment: Alignment.topLeft,
                                child: Container(
                                  width: 75,
                                  height: 24,
                                  margin: EdgeInsets.only(top: 17),
                                  decoration: BoxDecoration(
                                    color: AppColors.primaryElement,
                                    borderRadius: Radii.k12pxRadius,
                                  ),
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      Container(
                                        margin: EdgeInsets.symmetric(horizontal: 16),
                                        child: Text(
                                          "Tin Tức",
                                          textAlign: TextAlign.center,
                                          style: TextStyle(
                                            color: AppColors.accentText,
                                            fontFamily: "",
                                            fontWeight: FontWeight.w600,
                                            fontSize: 12,
                                            height: 1.33333,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Align(
                          alignment: Alignment.topLeft,
                          child: Container(
                            margin: EdgeInsets.only(left: 95, top: 51),
                            child: Text(
                              "EKKLISIA",
                              textAlign: TextAlign.left,
                              style: TextStyle(
                                color: Color.fromARGB(255, 0, 0, 0),
                                fontFamily: "SF Pro Rounded",
                                fontWeight: FontWeight.w600,
                                fontSize: 34,
                              ),
                            ),
                          ),
                        ),
                        Align(
                          alignment: Alignment.topLeft,
                          child: Container(
                            margin: EdgeInsets.only(left: 62, top: 30),
                            child: Text(
                              "Quản Lý Ban Ngành",
                              textAlign: TextAlign.left,
                              style: TextStyle(
                                color: Color.fromARGB(255, 0, 0, 0),
                                fontFamily: "SF Pro Rounded",
                                fontWeight: FontWeight.w600,
                                fontSize: 24,
                              ),
                            ),
                          ),
                        ),
                        Container(
                          height: 48,
                          margin: EdgeInsets.only(top: 127),
                          decoration: BoxDecoration(
                            color: AppColors.primaryElement,
                            borderRadius: Radii.k12pxRadius,
                          ),
                          child: Row(
                            children: [
                              Container(
                                margin: EdgeInsets.only(left: 16),
                                child: Text(
                                  "Mật khẩu",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontFamily: "Open Sans",
                                    fontWeight: FontWeight.w400,
                                    fontSize: 15,
                                    height: 1.33333,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Container(
                                width: 24,
                                height: 24,
                                margin: EdgeInsets.only(right: 12),
                                child: Image.asset(
                                  "assets/images/---icon-2.png",
                                  fit: BoxFit.none,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Spacer(),
                        Align(
                          alignment: Alignment.topCenter,
                          child: Container(
                            width: 144,
                            height: 40,
                            decoration: BoxDecoration(
                              color: AppColors.primaryElement,
                              borderRadius: BorderRadius.all(Radius.circular(4)),
                            ),
                            child: Row(
                              children: [
                                Container(
                                  margin: EdgeInsets.only(left: 18),
                                  child: Text(
                                    "ĐĂNG NHẬP",
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                      color: AppColors.primaryText,
                                      fontFamily: "Open Sans",
                                      fontWeight: FontWeight.w700,
                                      fontSize: 14,
                                      height: 1.14286,
                                    ),
                                  ),
                                ),
                                Spacer(),
                                Container(
                                  width: 20,
                                  height: 20,
                                  margin: EdgeInsets.only(right: 12),
                                  child: Image.asset(
                                    "assets/images/ic-chevron-right.png",
                                    fit: BoxFit.none,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Positioned(
              left: 16,
              right: 16,
              child: Container(
                height: 48,
                decoration: BoxDecoration(
                  color: AppColors.primaryElement,
                  borderRadius: Radii.k12pxRadius,
                ),
                child: Row(
                  children: [
                    Container(
                      margin: EdgeInsets.only(left: 16),
                      child: Text(
                        "Tên đăng nhập",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontFamily: "Open Sans",
                          fontWeight: FontWeight.w400,
                          fontSize: 15,
                          height: 1.33333,
                        ),
                      ),
                    ),
                    Spacer(),
                    Container(
                      width: 14,
                      height: 18,
                      margin: EdgeInsets.only(right: 17),
                      child: Image.asset(
                        "assets/images/---icon-3.png",
                        fit: BoxFit.none,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}