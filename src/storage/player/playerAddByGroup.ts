import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDto } from "./PlayerStorageDTO";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDto,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExistis = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExistis.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui. ");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
