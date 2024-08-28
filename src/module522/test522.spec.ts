
import { test, expect } from "@playwright/experimental-ct-react";
import App522 from "./App522.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App522 />);
  await expect(component).toContainText("Learn React");
});
