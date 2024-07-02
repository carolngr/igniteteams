import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

import { PlayerStorageDto } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDto,
  group: string
) {
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, "");
  } catch (error) {
    throw error;
  }
}
