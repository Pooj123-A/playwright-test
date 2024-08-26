
import { test, expect } from "@playwright/experimental-ct-react";
import App1431 from "../example/App1431.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1431 />);
  await expect(component).toContainText("Learn React");
});
