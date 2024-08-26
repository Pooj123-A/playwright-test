
import { test, expect } from "@playwright/experimental-ct-react";
import App981 from "../example/App981.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App981 />);
  await expect(component).toContainText("Learn React");
});
