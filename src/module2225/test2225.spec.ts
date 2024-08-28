
import { test, expect } from "@playwright/experimental-ct-react";
import App2225 from "./App2225.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2225 />);
  await expect(component).toContainText("Learn React");
});
