
import { test, expect } from "@playwright/experimental-ct-react";
import App2055 from "./App2055.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2055 />);
  await expect(component).toContainText("Learn React");
});
