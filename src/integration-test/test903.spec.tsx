
import { test, expect } from "@playwright/experimental-ct-react";
import App903 from "../example/App903.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App903 />);
  await expect(component).toContainText("Learn React");
});
