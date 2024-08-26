
import { test, expect } from "@playwright/experimental-ct-react";
import App768 from "../example/App768.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App768 />);
  await expect(component).toContainText("Learn React");
});
