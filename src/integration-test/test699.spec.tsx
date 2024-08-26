
import { test, expect } from "@playwright/experimental-ct-react";
import App699 from "../example/App699.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App699 />);
  await expect(component).toContainText("Learn React");
});
