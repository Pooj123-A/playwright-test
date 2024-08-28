
import { test, expect } from "@playwright/experimental-ct-react";
import App2781 from "./App2781.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2781 />);
  await expect(component).toContainText("Learn React");
});
