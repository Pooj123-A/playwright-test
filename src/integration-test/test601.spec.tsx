
import { test, expect } from "@playwright/experimental-ct-react";
import App601 from "../example/App601.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App601 />);
  await expect(component).toContainText("Learn React");
});
