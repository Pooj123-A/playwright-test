
import { test, expect } from "@playwright/experimental-ct-react";
import App820 from "../example/App820.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App820 />);
  await expect(component).toContainText("Learn React");
});
