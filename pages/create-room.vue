<template>
  <div class="create-room">
    <h1>🟪 방 개설하기</h1>

    <!-- 출발지/도착지 선택 -->
    <div class="input-group">
      <label>출발지</label>
      <input v-model="departure" placeholder="어디서 가시나요?" />
    </div>

    <div class="input-group">
      <label>도착지</label>
      <input v-model="destination" placeholder="어디로 가시나요?" />
    </div>

    <!-- 날짜 선택 -->
    <div class="input-group">
      <label>날짜</label>
      <input type="date" v-model="date" />
    </div>

    <!-- 시간 선택 -->
    <div class="input-group">
      <label>시간</label>
      <div class="time-picker">
        <select v-model="hour">
          <option v-for="h in 24" :key="h" :value="h">{{ h }}시</option>
        </select>
        <select v-model="minute">
          <option v-for="m in [0, 15, 30, 45]" :key="m" :value="m">
            {{ m }}분
          </option>
        </select>
      </div>
    </div>

    <!-- 최대 인원 선택 -->
    <div class="input-group">
      <label>최대 인원</label>
      <div class="passenger-count">
        <button @click="decreasePassengers">-</button>
        <span>{{ passengers }}</span>
        <button @click="increasePassengers">+</button>
      </div>
    </div>

    <!-- 방 이름 -->
    <div class="input-group">
      <label>방 이름</label>
      <input v-model="roomName" placeholder="택시 동승으로 인연 찾기" />
    </div>

    <!-- 버튼 -->
    <button @click="createRoom" class="create-room-btn">방 개설하기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departure: "",
      destination: "",
      date: "",
      hour: 0,
      minute: 0,
      passengers: 1,
      roomName: "",
    };
  },
  methods: {
    increasePassengers() {
      if (this.passengers < 8) this.passengers++;
    },
    decreasePassengers() {
      if (this.passengers > 1) this.passengers--;
    },
    async createRoom() {
      const roomData = {
        departure: this.departure,
        destination: this.destination,
        date: this.date,
        time: `${this.hour}:${this.minute}`,
        passengers: this.passengers,
        roomName: this.roomName,
      };

      try {
        const response = await this.$axios.post("/api/rooms", roomData);
        console.log("Room created:", response.data);
        this.$router.push("/rooms");
      } catch (error) {
        console.error("Error creating room:", error);
      }
    },
  },
};
</script>

<style scoped>
/* 스타일 정의 */
.create-room {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.time-picker {
  display: flex;
  justify-content: space-between;
}

.passenger-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #7b4fff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.create-room-btn {
  display: block;
  width: 100%;
  background-color: #7b4fff;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
