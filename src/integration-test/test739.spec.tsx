
import { test, expect } from "@playwright/experimental-ct-react";
import App739 from "../example/App739.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App739 />);
  await expect(component).toContainText("Learn React");
});
