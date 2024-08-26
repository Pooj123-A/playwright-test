
import { test, expect } from "@playwright/experimental-ct-react";
import App1087 from "./App1087.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1087 />);
  await expect(component).toContainText("Learn React");
});
