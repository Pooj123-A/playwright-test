
import { test, expect } from "@playwright/experimental-ct-react";
import App1507 from "../example/App1507.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1507 />);
  await expect(component).toContainText("Learn React");
});
