
import { test, expect } from "@playwright/experimental-ct-react";
import App501 from "../example/App501.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App501 />);
  await expect(component).toContainText("Learn React");
});
