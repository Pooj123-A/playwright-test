
import { test, expect } from "@playwright/experimental-ct-react";
import App142 from "../example/App142.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App142 />);
  await expect(component).toContainText("Learn React");
});
