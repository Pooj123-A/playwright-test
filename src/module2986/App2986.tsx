
import { test, expect } from "@playwright/experimental-ct-react";
import App2986 from "./App2986.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2986 />);
  await expect(component).toContainText("Learn React");
});
