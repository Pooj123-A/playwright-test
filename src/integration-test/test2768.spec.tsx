
import { test, expect } from "@playwright/experimental-ct-react";
import App2768 from "../example/App2768.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2768 />);
  await expect(component).toContainText("Learn React");
});
