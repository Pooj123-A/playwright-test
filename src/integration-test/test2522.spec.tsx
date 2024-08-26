
import { test, expect } from "@playwright/experimental-ct-react";
import App2522 from "../example/App2522.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2522 />);
  await expect(component).toContainText("Learn React");
});
