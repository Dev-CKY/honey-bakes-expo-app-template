import email from "@/src/assets/icons/svg/email";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import lock from "@/src/assets/icons/svg/lock";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import styles from "@/src/styles/screens/signIn.styles";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const SignIn = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Heading */}
      <HeadingTitle size={32} title="Sign In" />

      {/* Sub Heading */}
      <SubHeadingTitle title="to access your account." />

      {/* Email */}
      <TextInputField
        keyboardType="email-address"
        placeholder="Email address"
        leftIcon={<SvgXml xml={email} width={scale(24)} height={scale(24)} />}
      />

      {/* Password */}
      <TextInputField
        keyboardType="default"
        placeholder="Password"
        isEncrypted
        leftIcon={<SvgXml xml={lock} width={scale(24)} height={scale(24)} />}
        eyeOpenIcon={<SvgXml xml={eye} width={scale(24)} height={scale(24)} />}
        eyeCloseIcon={
          <SvgXml xml={eyeOff} width={scale(24)} height={scale(24)} />
        }
      />

      {/* Forgot Password */}
      <Link href="/(auth)/forgot-password" style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Link>

      {/* Button */}
      <Button onPress={() => {}} label="Sign In" />

      {/* Don't have an account */}
      <Text style={styles.accountText}>
        Don&apos;t have an account?{" "}
        <Link href="/(auth)/sign-up" style={styles.signUpText}>
          Sign Up
        </Link>
      </Text>
    </ImageBackground>
  );
};

export default SignIn;
