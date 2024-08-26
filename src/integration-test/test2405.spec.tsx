
import { test, expect } from "@playwright/experimental-ct-react";
import App2405 from "../example/App2405.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2405 />);
  await expect(component).toContainText("Learn React");
});
