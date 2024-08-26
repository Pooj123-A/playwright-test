
import { test, expect } from "@playwright/experimental-ct-react";
import App865 from "../example/App865.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App865 />);
  await expect(component).toContainText("Learn React");
});
