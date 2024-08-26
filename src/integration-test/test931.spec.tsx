
import { test, expect } from "@playwright/experimental-ct-react";
import App931 from "../example/App931.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App931 />);
  await expect(component).toContainText("Learn React");
});
