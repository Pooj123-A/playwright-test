
import { test, expect } from "@playwright/experimental-ct-react";
import App955 from "../example/App955.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App955 />);
  await expect(component).toContainText("Learn React");
});
