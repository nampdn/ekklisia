import 'package:ekklisia/values/values.dart';
import 'package:flutter/material.dart';

class AuthenticationScreenWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          constraints: BoxConstraints.expand(),
          decoration: BoxDecoration(
            color: Color.fromARGB(255, 255, 255, 255),
          ),
          child: Stack(
            alignment: Alignment.center,
            children: <Widget>[
              Positioned(
                  right: 0,
                  left: 0,
                  top: 0,
                  bottom: 0,
                  child: Image.asset("assets/images/21--image-2-square.png",
                      fit: BoxFit.cover))
            ],
          )),
    );
  }
}
