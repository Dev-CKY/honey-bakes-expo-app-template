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
        <View className="px-[20px] pt-[20px]">
          {/* Back Button */}
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="Edit Profile" />

          {/* Avatar */}
          <View className="items-center mt-[25px]">
            <View className="relative">
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                className="h-[110px] w-[110px] rounded-full"
              />

              <Pressable className="absolute bottom-0 right-0 h-[40px] w-[40px] items-center justify-center rounded-full border border-[#1F1500] bg-[#F7BC5D]">
                <SvgXml xml={pencil} />
              </Pressable>
            </View>

            <Text className="mt-[10px] text-[20px] font-[kalnia-medium] text-[#1F1500]">
              {name}
            </Text>

            <Text className="text-[14px] font-[poppins-regular] text-[#C2A26F]">
              {email}
            </Text>
          </View>

          {/* Form */}
          <View className="mt-[30px] gap-y-[20px]">
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
            <View className="flex-row items-center">
              <Text className="w-[80px] text-[16px] font-[poppins-regular] text-[#C2A26F]">
                Gender
              </Text>

              <View className="flex-1 flex-row gap-x-[10px]">
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
          <View className="mt-[30px] gap-y-[16px]">
            <Pressable className="h-[64px] items-center justify-center rounded-full border-2 border-[#1F1500] bg-[#F7BC5D]">
              <Text className="font-[poppins-medium] text-[20px] text-[#1F1500]">
                Save
              </Text>
            </Pressable>

            <Pressable
              className="h-[64px] items-center justify-center rounded-full border border-[#1F1500]"
              style={{ borderStyle: "dashed" }}
            >
              <Text className="font-[poppins-medium] text-[20px] text-[#1F1500]">
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
