
import { test, expect } from "@playwright/experimental-ct-react";
import App303 from "./App303.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App303 />);
  await expect(component).toContainText("Learn React");
});
