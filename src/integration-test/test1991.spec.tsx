
import { test, expect } from "@playwright/experimental-ct-react";
import App1991 from "../example/App1991.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1991 />);
  await expect(component).toContainText("Learn React");
});
