
import { test, expect } from "@playwright/experimental-ct-react";
import App320 from "../example/App320.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App320 />);
  await expect(component).toContainText("Learn React");
});
