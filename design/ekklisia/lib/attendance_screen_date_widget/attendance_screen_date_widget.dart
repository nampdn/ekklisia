/*
*  attendance_screen_date_widget.dart
*  Ekklisia
*
*  Created by Nam Pham.
*  Copyright © 2018 [Company]. All rights reserved.
    */

import 'package:ekklisia/values/values.dart';
import 'package:flutter/material.dart';


class AttendanceScreenDateWidget extends StatelessWidget {
  
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
            Align(
              alignment: Alignment.topCenter,
              child: Container(
                width: 328,
                height: 340,
                margin: EdgeInsets.only(top: 51),
                decoration: BoxDecoration(
                  color: AppColors.primaryBackground,
                  borderRadius: Radii.k12pxRadius,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      height: 60,
                      child: Stack(
                        alignment: Alignment.centerLeft,
                        children: [
                          Positioned(
                            left: 0,
                            top: 18,
                            right: 0,
                            bottom: 0,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Container(
                                  height: 10,
                                  margin: EdgeInsets.only(left: 150, right: 41),
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 10,
                                          height: 6,
                                          child: Image.asset(
                                            "assets/images/icon-2.png",
                                            fit: BoxFit.none,
                                          ),
                                        ),
                                      ),
                                      Spacer(),
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 6,
                                          height: 10,
                                          margin: EdgeInsets.only(right: 26),
                                          child: Image.asset(
                                            "assets/images/icon-.png",
                                            fit: BoxFit.none,
                                          ),
                                        ),
                                      ),
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 6,
                                          height: 10,
                                          child: Image.asset(
                                            "assets/images/icon--2.png",
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
                                  child: Image.asset(
                                    "assets/images/-divider.png",
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Positioned(
                            left: 24,
                            child: Text(
                              "SEPTEMBER 2019",
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
                        ],
                      ),
                    ),
                    Container(
                      height: 280,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Container(
                            height: 44,
                            margin: EdgeInsets.only(top: 4),
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                Positioned(
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  child: Image.asset(
                                    "assets/images/-divider.png",
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                Positioned(
                                  left: 10,
                                  right: 10,
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Spacer(),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 13,
                                                top: 7,
                                                right: 13,
                                                child: Text(
                                                  "Su",
                                                  textAlign: TextAlign.center,
                                                  style: TextStyle(
                                                    color: AppColors.secondaryText,
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
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            height: 220,
                            margin: EdgeInsets.only(left: 10, top: 4, right: 10),
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                Positioned(
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                      Container(
                                        width: 44,
                                        margin: EdgeInsets.only(top: 88),
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topCenter,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topCenter,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topCenter,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                          ],
                                        ),
                                      ),
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 44,
                                          height: 88,
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.stretch,
                                            children: [
                                              Align(
                                                alignment: Alignment.topCenter,
                                                child: Container(
                                                  width: 44,
                                                  height: 44,
                                                  child: Stack(
                                                    alignment: Alignment.center,
                                                    children: [
                                                      Positioned(
                                                        left: 0,
                                                        right: 0,
                                                        child: Image.asset(
                                                          "assets/images/---background-.png",
                                                          fit: BoxFit.none,
                                                        ),
                                                      ),
                                                      Positioned(
                                                        left: 14,
                                                        top: 7,
                                                        right: 14,
                                                        child: Text(
                                                          "01",
                                                          textAlign: TextAlign.center,
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
                                              ),
                                              Align(
                                                alignment: Alignment.topCenter,
                                                child: Container(
                                                  width: 44,
                                                  height: 44,
                                                  child: Stack(
                                                    alignment: Alignment.center,
                                                    children: [
                                                      Positioned(
                                                        left: 0,
                                                        right: 0,
                                                        child: Image.asset(
                                                          "assets/images/---background-.png",
                                                          fit: BoxFit.none,
                                                        ),
                                                      ),
                                                      Positioned(
                                                        left: 0,
                                                        right: 0,
                                                        child: Image.asset(
                                                          "assets/images/---background-.png",
                                                          fit: BoxFit.none,
                                                        ),
                                                      ),
                                                      Positioned(
                                                        left: 14,
                                                        top: 7,
                                                        right: 14,
                                                        child: Text(
                                                          "01",
                                                          textAlign: TextAlign.center,
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
                                              ),
                                            ],
                                          ),
                                        ),
                                      ),
                                      Spacer(),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: Container(
                                          width: 44,
                                          height: 44,
                                          child: Stack(
                                            alignment: Alignment.center,
                                            children: [
                                              Positioned(
                                                left: 0,
                                                right: 0,
                                                child: Image.asset(
                                                  "assets/images/---background-.png",
                                                  fit: BoxFit.none,
                                                ),
                                              ),
                                              Positioned(
                                                left: 14,
                                                top: 7,
                                                right: 14,
                                                child: Text(
                                                  "01",
                                                  textAlign: TextAlign.center,
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
                                      ),
                                    ],
                                  ),
                                ),
                                Positioned(
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
                                                        style: TextStyle(
                                                          color: AppColors.secondaryText,
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
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                          ],
                                        ),
                                      ),
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
                                                        style: TextStyle(
                                                          color: AppColors.secondaryText,
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
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                          ],
                                        ),
                                      ),
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topLeft,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                          ],
                                        ),
                                      ),
                                      Spacer(),
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      bottom: 4,
                                                      child: Column(
                                                        crossAxisAlignment: CrossAxisAlignment.stretch,
                                                        children: [
                                                          Text(
                                                            "01",
                                                            textAlign: TextAlign.center,
                                                            style: TextStyle(
                                                              color: AppColors.primaryText,
                                                              fontFamily: "",
                                                              fontWeight: FontWeight.w600,
                                                              fontSize: 15,
                                                              height: 1.6,
                                                            ),
                                                          ),
                                                          Spacer(),
                                                          Container(
                                                            height: 6,
                                                            margin: EdgeInsets.symmetric(horizontal: 5),
                                                            child: Image.asset(
                                                              "assets/images/-schedule.png",
                                                              fit: BoxFit.none,
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                          ],
                                        ),
                                      ),
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
                                                        style: TextStyle(
                                                          color: AppColors.secondaryText,
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
                                          ],
                                        ),
                                      ),
                                      Container(
                                        width: 44,
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.stretch,
                                          children: [
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                margin: EdgeInsets.only(top: 44),
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
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
                                            ),
                                            Spacer(),
                                            Align(
                                              alignment: Alignment.topRight,
                                              child: Container(
                                                width: 44,
                                                height: 44,
                                                child: Stack(
                                                  alignment: Alignment.center,
                                                  children: [
                                                    Positioned(
                                                      left: 0,
                                                      right: 0,
                                                      child: Image.asset(
                                                        "assets/images/---background-.png",
                                                        fit: BoxFit.none,
                                                      ),
                                                    ),
                                                    Positioned(
                                                      left: 14,
                                                      top: 7,
                                                      right: 14,
                                                      child: Text(
                                                        "01",
                                                        textAlign: TextAlign.center,
                                                        style: TextStyle(
                                                          color: AppColors.secondaryText,
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
                                          ],
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
                  ],
                ),
              ),
            ),
            Container(
              height: 56,
              margin: EdgeInsets.only(top: 26),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    left: 16,
                    right: -6,
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
                            width: 74,
                            height: 32,
                            child: Image.asset(
                              "assets/images/toggle-7.png",
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
            Spacer(),
            Container(
              height: 56,
              child: Stack(
                alignment: Alignment.centerLeft,
                children: [
                  Positioned(
                    left: 0,
                    top: 12,
                    right: -66,
                    bottom: -8,
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
                                right: 66,
                                bottom: 8,
                                child: Image.asset(
                                  "assets/images/-divider-2.png",
                                  fit: BoxFit.cover,
                                ),
                              ),
                              Positioned(
                                top: 0,
                                right: 0,
                                child: Image.asset(
                                  "assets/images/toggle-5.png",
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
              margin: EdgeInsets.only(bottom: 26),
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