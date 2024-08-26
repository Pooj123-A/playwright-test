
import { test, expect } from "@playwright/experimental-ct-react";
import App809 from "../example/App809.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App809 />);
  await expect(component).toContainText("Learn React");
});
