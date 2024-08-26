
import { test, expect } from "@playwright/experimental-ct-react";
import App343 from "../example/App343.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App343 />);
  await expect(component).toContainText("Learn React");
});
