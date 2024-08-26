
import { test, expect } from "@playwright/experimental-ct-react";
import App134 from "../example/App134.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App134 />);
  await expect(component).toContainText("Learn React");
});
