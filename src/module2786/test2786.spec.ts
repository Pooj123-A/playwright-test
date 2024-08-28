
import { test, expect } from "@playwright/experimental-ct-react";
import App2786 from "./App2786.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2786 />);
  await expect(component).toContainText("Learn React");
});
