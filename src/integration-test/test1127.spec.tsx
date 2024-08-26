
import { test, expect } from "@playwright/experimental-ct-react";
import App1127 from "../example/App1127.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1127 />);
  await expect(component).toContainText("Learn React");
});
