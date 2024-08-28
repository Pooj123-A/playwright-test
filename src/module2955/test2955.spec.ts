
import { test, expect } from "@playwright/experimental-ct-react";
import App2955 from "./App2955.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2955 />);
  await expect(component).toContainText("Learn React");
});
