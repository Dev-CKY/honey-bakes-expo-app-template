import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import pencil from "@/src/assets/icons/svg/pencil";
import DOBPicker from "@/src/components/custom/DOBPicker";
import EditProfileTextInputField from "@/src/components/custom/EditProfileTextInput";
import GenderButton from "@/src/components/custom/GenderButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";

import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import styles from "@/src/styles/screens/editProfile.styles";
import dayjs, { Dayjs } from "dayjs";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const EditProfile = () => {
  const [name, setName] = useState("Mathew Doe");
  const [email, setEmail] = useState("mathewdoe123@gmail.com");
  const [phone, setPhone] = useState("9837920763");

  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [dob, setDob] = useState<Dayjs>(dayjs("1997-11-25"));

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentContainer}>
          {/* Back Button */}
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="Edit Profile" />

          {/* Avatar */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                style={styles.avatar}
              />

              <Pressable style={styles.editAvatarButton}>
                <SvgXml xml={pencil} width={scale(18)} height={scale(18)} />
              </Pressable>
            </View>

            <Text style={styles.userName}>{name}</Text>

            <Text style={styles.userEmail}>{email}</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <EditProfileTextInputField
              label="Name"
              value={name}
              onChangeText={setName}
            />

            <EditProfileTextInputField
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <EditProfileTextInputField
              label="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            {/* Gender */}
            <View style={styles.genderRow}>
              <Text style={styles.genderLabel}>Gender</Text>

              <View style={styles.genderButtonsContainer}>
                <GenderButton
                  title="Male"
                  symbol="♂"
                  selected={gender === "Male"}
                  onPress={() => setGender("Male")}
                />

                <GenderButton
                  title="Female"
                  symbol="♀"
                  selected={gender === "Female"}
                  onPress={() => setGender("Female")}
                />
              </View>
            </View>

            {/* DOB */}
            <DOBPicker value={dob} onChange={setDob} />
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>

            <Pressable style={styles.discardButton}>
              <Text style={styles.discardButtonText}>Discard</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
