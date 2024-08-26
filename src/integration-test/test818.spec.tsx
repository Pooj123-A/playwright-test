
import { test, expect } from "@playwright/experimental-ct-react";
import App818 from "../example/App818.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App818 />);
  await expect(component).toContainText("Learn React");
});
