
import { test, expect } from "@playwright/experimental-ct-react";
import App885 from "./App885.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App885 />);
  await expect(component).toContainText("Learn React");
});
