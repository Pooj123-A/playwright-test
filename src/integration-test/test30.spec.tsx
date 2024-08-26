
import { test, expect } from "@playwright/experimental-ct-react";
import App30 from "../example/App30.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App30 />);
  await expect(component).toContainText("Learn React");
});
