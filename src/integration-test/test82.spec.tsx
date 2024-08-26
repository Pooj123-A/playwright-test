
import { test, expect } from "@playwright/experimental-ct-react";
import App82 from "../example/App82.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App82 />);
  await expect(component).toContainText("Learn React");
});
