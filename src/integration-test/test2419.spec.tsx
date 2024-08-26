
import { test, expect } from "@playwright/experimental-ct-react";
import App2419 from "../example/App2419.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2419 />);
  await expect(component).toContainText("Learn React");
});
