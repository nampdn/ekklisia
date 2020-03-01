/*
*  attendance_screen_activity_widget.dart
*  Ekklisia
*
*  Created by Nam Pham.
*  Copyright © 2018 [Company]. All rights reserved.
    */

import 'package:ekklisia/values/values.dart';
import 'package:flutter/material.dart';


class AttendanceScreenActivityWidget extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
  
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 255, 255),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 48,
              margin: EdgeInsets.only(left: 17, top: 52, right: 15),
              decoration: BoxDecoration(
                color: AppColors.primaryElement,
                borderRadius: Radii.k12pxRadius,
              ),
              child: Row(
                children: [
                  Container(
                    margin: EdgeInsets.only(left: 16),
                    child: Text(
                      "16/01/2020",
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
                    width: 18,
                    height: 20,
                    margin: EdgeInsets.only(right: 18),
                    child: Image.asset(
                      "assets/images/---icon.png",
                      fit: BoxFit.none,
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 282,
              margin: EdgeInsets.only(top: 23),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    left: 0,
                    top: 58,
                    right: 0,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Container(
                          height: 56,
                          child: Stack(
                            alignment: Alignment.center,
                            children: [
                              Positioned(
                                left: 16,
                                right: 16,
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Align(
                                      alignment: Alignment.centerLeft,
                                      child: Container(
                                        width: 40,
                                        height: 40,
                                        child: Image.asset(
                                          "assets/images/avatar.png",
                                          fit: BoxFit.none,
                                        ),
                                      ),
                                    ),
                                    Spacer(),
                                    Align(
                                      alignment: Alignment.centerLeft,
                                      child: Container(
                                        width: 52,
                                        height: 32,
                                        child: Image.asset(
                                          "assets/images/toggle.png",
                                          fit: BoxFit.none,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Positioned(
                                left: 0,
                                top: 13,
                                right: 0,
                                bottom: 0,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Align(
                                      alignment: Alignment.topLeft,
                                      child: Container(
                                        margin: EdgeInsets.only(left: 72),
                                        child: Text(
                                          "Lê Vũ Văn Phi",
                                          textAlign: TextAlign.left,
                                          style: TextStyle(
                                            color: AppColors.primaryText,
                                            fontFamily: "",
                                            fontWeight: FontWeight.w600,
                                            fontSize: 15,
                                            height: 1.6,
                                          ),
                                        ),
                                      ),
                                    ),
                                    Spacer(),
                                    Container(
                                      height: 1,
                                      child: Image.asset(
                                        "assets/images/-divider-2.png",
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          height: 56,
                          child: Stack(
                            alignment: Alignment.centerLeft,
                            children: [
                              Positioned(
                                left: 0,
                                top: 12,
                                right: -96,
                                bottom: -18,
                                child: Stack(
                                  alignment: Alignment.center,
                                  children: [
                                    Positioned(
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      child: Stack(
                                        alignment: Alignment.center,
                                        children: [
                                          Positioned(
                                            left: 0,
                                            right: 96,
                                            bottom: 18,
                                            child: Image.asset(
                                              "assets/images/-divider-2.png",
                                              fit: BoxFit.cover,
                                            ),
                                          ),
                                          Positioned(
                                            right: 0,
                                            bottom: 0,
                                            child: Image.asset(
                                              "assets/images/toggle-6.png",
                                              fit: BoxFit.none,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Positioned(
                                      left: 72,
                                      top: 1,
                                      child: Text(
                                        "Phạm Dương Nhật Nam",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.primaryText,
                                          fontFamily: "",
                                          fontWeight: FontWeight.w600,
                                          fontSize: 15,
                                          height: 1.6,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Positioned(
                                left: 16,
                                child: Image.asset(
                                  "assets/images/avatar-2.png",
                                  fit: BoxFit.none,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          height: 56,
                          child: Stack(
                            alignment: Alignment.center,
                            children: [
                              Positioned(
                                left: 16,
                                right: 16,
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Align(
                                      alignment: Alignment.centerLeft,
                                      child: Container(
                                        width: 40,
                                        height: 40,
                                        child: Image.asset(
                                          "assets/images/avatar-2.png",
                                          fit: BoxFit.none,
                                        ),
                                      ),
                                    ),
                                    Spacer(),
                                    Align(
                                      alignment: Alignment.centerLeft,
                                      child: Container(
                                        width: 52,
                                        height: 32,
                                        child: Image.asset(
                                          "assets/images/toggle-2.png",
                                          fit: BoxFit.none,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Positioned(
                                left: 0,
                                top: 13,
                                right: 0,
                                bottom: 0,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Align(
                                      alignment: Alignment.topLeft,
                                      child: Container(
                                        margin: EdgeInsets.only(left: 72),
                                        child: Text(
                                          "Trần Văn Tùng",
                                          textAlign: TextAlign.left,
                                          style: TextStyle(
                                            color: AppColors.primaryText,
                                            fontFamily: "",
                                            fontWeight: FontWeight.w600,
                                            fontSize: 15,
                                            height: 1.6,
                                          ),
                                        ),
                                      ),
                                    ),
                                    Spacer(),
                                    Container(
                                      height: 1,
                                      child: Image.asset(
                                        "assets/images/-divider-2.png",
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          height: 56,
                          child: Stack(
                            alignment: Alignment.centerLeft,
                            children: [
                              Positioned(
                                left: 16,
                                child: Image.asset(
                                  "assets/images/avatar-2.png",
                                  fit: BoxFit.none,
                                ),
                              ),
                              Positioned(
                                left: 0,
                                top: 12,
                                right: -36,
                                bottom: 0,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Container(
                                      height: 42,
                                      margin: EdgeInsets.only(left: 72),
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.stretch,
                                        children: [
                                          Align(
                                            alignment: Alignment.topLeft,
                                            child: Container(
                                              margin: EdgeInsets.only(top: 1),
                                              child: Text(
                                                "Lê Vũ Văn Phi",
                                                textAlign: TextAlign.left,
                                                style: TextStyle(
                                                  color: AppColors.primaryText,
                                                  fontFamily: "",
                                                  fontWeight: FontWeight.w600,
                                                  fontSize: 15,
                                                  height: 1.6,
                                                ),
                                              ),
                                            ),
                                          ),
                                          Spacer(),
                                          Align(
                                            alignment: Alignment.topLeft,
                                            child: Container(
                                              width: 104,
                                              height: 42,
                                              child: Image.asset(
                                                "assets/images/toggle-4.png",
                                                fit: BoxFit.none,
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Spacer(),
                                    Container(
                                      height: 1,
                                      margin: EdgeInsets.only(right: 36),
                                      child: Image.asset(
                                        "assets/images/-divider-2.png",
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Positioned(
                    left: 17,
                    top: 0,
                    right: 15,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Positioned(
                          left: 0,
                          right: 0,
                          child: Container(
                            height: 48,
                            decoration: BoxDecoration(
                              color: AppColors.secondaryElement,
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  margin: EdgeInsets.only(left: 16, top: 8),
                                  child: Text(
                                    "Nhóm chiều Chúa Nhật",
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                      color: AppColors.accentText,
                                      fontFamily: "",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 15,
                                      height: 1.6,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Positioned(
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Container(
                                height: 48,
                                decoration: BoxDecoration(
                                  color: AppColors.primaryElement,
                                  borderRadius: Radii.k12pxRadius,
                                ),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Container(
                                      margin: EdgeInsets.only(left: 16, top: 9),
                                      child: Text(
                                        "Hoạt động",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.secondaryText,
                                          fontFamily: "",
                                          fontWeight: FontWeight.w600,
                                          fontSize: 15,
                                          height: 1.6,
                                        ),
                                      ),
                                    ),
                                    Spacer(),
                                    Container(
                                      width: 10,
                                      height: 6,
                                      margin: EdgeInsets.only(top: 12, right: 26),
                                      child: Image.asset(
                                        "assets/images/27-icon-chevron-down.png",
                                        fit: BoxFit.none,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Expanded(
                                flex: 1,
                                child: Container(
                                  margin: EdgeInsets.only(top: 4),
                                  child: Stack(
                                    alignment: Alignment.center,
                                    children: [
                                      Positioned(
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        child: Container(
                                          height: 192,
                                          decoration: BoxDecoration(
                                            color: AppColors.primaryBackground,
                                            borderRadius: Radii.k12pxRadius,
                                          ),
                                          child: Container(),
                                        ),
                                      ),
                                      Positioned(
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        child: Container(
                                          height: 192,
                                          decoration: BoxDecoration(
                                            color: AppColors.primaryBackground,
                                            borderRadius: Radii.k12pxRadius,
                                          ),
                                          child: Container(),
                                        ),
                                      ),
                                      Positioned(
                                        left: 16,
                                        top: 9,
                                        bottom: 15,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Text(
                                                "Thanh Niên",
                                                textAlign: TextAlign.left,
                                                style: TextStyle(
                                                  color: AppColors.secondaryText,
                                                  fontFamily: "",
                                                  fontWeight: FontWeight.w600,
                                                  fontSize: 15,
                                                  height: 1.6,
                                                ),
                                              ),
                                            ),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                margin: EdgeInsets.only(top: 72),
                                                child: Text(
                                                  "Thăm Viếng",
                                                  textAlign: TextAlign.left,
                                                  style: TextStyle(
                                                    color: AppColors.primaryText,
                                                    fontFamily: "",
                                                    fontWeight: FontWeight.w600,
                                                    fontSize: 15,
                                                    height: 1.6,
                                                  ),
                                                ),
                                              ),
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Text(
                                                "Thăm Viếng",
                                                textAlign: TextAlign.left,
                                                style: TextStyle(
                                                  color: AppColors.primaryText,
                                                  fontFamily: "",
                                                  fontWeight: FontWeight.w600,
                                                  fontSize: 15,
                                                  height: 1.6,
                                                ),
                                              ),
                                            ),
                                          ],
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
                ],
              ),
            ),
            Container(
              height: 56,
              child: Stack(
                alignment: Alignment.centerLeft,
                children: [
                  Positioned(
                    left: 0,
                    top: 12,
                    right: -126,
                    bottom: -28,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Positioned(
                          left: 0,
                          right: 0,
                          bottom: 0,
                          child: Stack(
                            alignment: Alignment.center,
                            children: [
                              Positioned(
                                left: 0,
                                right: 126,
                                bottom: 28,
                                child: Image.asset(
                                  "assets/images/-divider-2.png",
                                  fit: BoxFit.cover,
                                ),
                              ),
                              Positioned(
                                right: 0,
                                bottom: 0,
                                child: Image.asset(
                                  "assets/images/toggle-3.png",
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Positioned(
                          left: 72,
                          top: 1,
                          child: Text(
                            "Phạm Dương Nhật Nam",
                            textAlign: TextAlign.left,
                            style: TextStyle(
                              color: AppColors.primaryText,
                              fontFamily: "",
                              fontWeight: FontWeight.w600,
                              fontSize: 15,
                              height: 1.6,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Positioned(
                    left: 16,
                    child: Image.asset(
                      "assets/images/avatar-2.png",
                      fit: BoxFit.none,
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 56,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    left: 16,
                    right: 16,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Container(
                            width: 40,
                            height: 40,
                            child: Image.asset(
                              "assets/images/avatar-2.png",
                              fit: BoxFit.none,
                            ),
                          ),
                        ),
                        Spacer(),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Container(
                            width: 52,
                            height: 32,
                            child: Image.asset(
                              "assets/images/toggle-2.png",
                              fit: BoxFit.none,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Positioned(
                    left: 0,
                    top: 13,
                    right: 0,
                    bottom: 0,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Align(
                          alignment: Alignment.topLeft,
                          child: Container(
                            margin: EdgeInsets.only(left: 72),
                            child: Text(
                              "Trần Văn Tùng",
                              textAlign: TextAlign.left,
                              style: TextStyle(
                                color: AppColors.primaryText,
                                fontFamily: "",
                                fontWeight: FontWeight.w600,
                                fontSize: 15,
                                height: 1.6,
                              ),
                            ),
                          ),
                        ),
                        Spacer(),
                        Container(
                          height: 1,
                          child: Image.asset(
                            "assets/images/-divider-2.png",
                            fit: BoxFit.cover,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Spacer(),
            Container(
              height: 56,
              margin: EdgeInsets.only(bottom: 38),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    left: 16,
                    right: 16,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Container(
                            width: 40,
                            height: 40,
                            child: Image.asset(
                              "assets/images/avatar-2.png",
                              fit: BoxFit.none,
                            ),
                          ),
                        ),
                        Spacer(),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Container(
                            width: 52,
                            height: 32,
                            child: Image.asset(
                              "assets/images/toggle-2.png",
                              fit: BoxFit.none,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Positioned(
                    left: 0,
                    top: 13,
                    right: 0,
                    bottom: 0,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Align(
                          alignment: Alignment.topLeft,
                          child: Container(
                            margin: EdgeInsets.only(left: 72),
                            child: Text(
                              "Trần Văn Tùng",
                              textAlign: TextAlign.left,
                              style: TextStyle(
                                color: AppColors.primaryText,
                                fontFamily: "",
                                fontWeight: FontWeight.w600,
                                fontSize: 15,
                                height: 1.6,
                              ),
                            ),
                          ),
                        ),
                        Spacer(),
                        Container(
                          height: 1,
                          child: Image.asset(
                            "assets/images/-divider-2.png",
                            fit: BoxFit.cover,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 56,
              decoration: BoxDecoration(
                color: AppColors.accentElement,
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Container(
                      width: 125,
                      height: 56,
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          Positioned(
                            left: 0,
                            top: 0,
                            right: 0,
                            child: Container(
                              height: 4,
                              decoration: BoxDecoration(
                                color: AppColors.secondaryElement,
                              ),
                              child: Container(),
                            ),
                          ),
                          Positioned(
                            child: Image.asset(
                              "assets/images/icon.png",
                              fit: BoxFit.none,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    width: 20,
                    height: 19,
                    margin: EdgeInsets.only(left: 50, top: 16),
                    child: Image.asset(
                      "assets/images/icon-4.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Spacer(),
                  Container(
                    width: 20,
                    height: 19,
                    margin: EdgeInsets.only(top: 16, right: 55),
                    child: Image.asset(
                      "assets/images/icon-4.png",
                      fit: BoxFit.none,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}