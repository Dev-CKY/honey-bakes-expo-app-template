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
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="flex-1 bg-[#FFFFE3]"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: scale(40),
        }}
      >
        <View style={{ paddingHorizontal: scale(20), paddingTop: scale(20) }}>
          {/* Back Button */}
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="Edit Profile" />

          {/* Avatar */}
          <View style={{ alignItems: "center", marginTop: scale(25) }}>
            <View style={{ position: "relative" }}>
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                style={{
                  height: scale(110),
                  width: scale(110),
                  borderRadius: scale(110) / 2,
                }}
              />

              <Pressable
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: scale(40),
                  width: scale(40),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: scale(40) / 2,
                  borderWidth: scale(1),
                  borderColor: "#1F1500",
                  backgroundColor: "#F7BC5D",
                }}
              >
                <SvgXml xml={pencil} width={scale(18)} height={scale(18)} />
              </Pressable>
            </View>

            <Text
              style={{ marginTop: scale(10), fontSize: scale(20) }}
              className="font-[kalnia-medium] text-[#1F1500]"
            >
              {name}
            </Text>

            <Text
              style={{ fontSize: scale(14) }}
              className="font-[poppins-regular] text-[#C2A26F]"
            >
              {email}
            </Text>
          </View>

          {/* Form */}
          <View style={{ marginTop: scale(30), rowGap: scale(20) }}>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ width: scale(80), fontSize: scale(16) }}
                className="font-[poppins-regular] text-[#C2A26F]"
              >
                Gender
              </Text>

              <View
                style={{ flex: 1, flexDirection: "row", columnGap: scale(10) }}
              >
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
          <View style={{ marginTop: scale(30), rowGap: scale(16) }}>
            <Pressable
              style={{
                height: scale(64),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(64) / 2,
                borderWidth: scale(2),
                borderColor: "#1F1500",
                backgroundColor: "#F7BC5D",
              }}
            >
              <Text
                style={{ fontSize: scale(20) }}
                className="font-[poppins-medium] text-[#1F1500]"
              >
                Save
              </Text>
            </Pressable>

            <Pressable
              style={{
                height: scale(64),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(64) / 2,
                borderWidth: scale(1),
                borderColor: "#1F1500",
                borderStyle: "dashed",
              }}
            >
              <Text
                style={{ fontSize: scale(20) }}
                className="font-[poppins-medium] text-[#1F1500]"
              >
                Discard
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
