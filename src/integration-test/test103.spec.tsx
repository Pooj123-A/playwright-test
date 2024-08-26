
import { test, expect } from "@playwright/experimental-ct-react";
import App103 from "../example/App103.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App103 />);
  await expect(component).toContainText("Learn React");
});
