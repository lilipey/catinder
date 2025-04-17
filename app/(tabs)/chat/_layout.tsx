import { Stack } from "expo-router";

export default function ChatLayout() {

    return (
        <Stack>
            <Stack.Screen name="explore" options={{ headerShown: false, title: "Discussions" }} />
            <Stack.Screen name="[id]" options={{ title: "Chat"}} />
        </Stack>
    )
}