
import { test, expect } from "@playwright/experimental-ct-react";
import App914 from "../example/App914.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App914 />);
  await expect(component).toContainText("Learn React");
});
