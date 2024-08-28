
import { test, expect } from "@playwright/experimental-ct-react";
import App693 from "./App693.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App693 />);
  await expect(component).toContainText("Learn React");
});
