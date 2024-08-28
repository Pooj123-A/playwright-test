
import { test, expect } from "@playwright/experimental-ct-react";
import App2969 from "./App2969.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2969 />);
  await expect(component).toContainText("Learn React");
});
