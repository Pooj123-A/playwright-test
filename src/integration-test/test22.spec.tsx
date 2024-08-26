
import { test, expect } from "@playwright/experimental-ct-react";
import App22 from "../example/App22.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App22 />);
  await expect(component).toContainText("Learn React");
});
